/**
 * @module MailingListForm
 * @desc mailing list form
 */

import React, { PureComponent } from 'react';
import fetchp from 'fetch-jsonp';

import { sanitize } from '../../../utilities/string';
import toQueryString from '../../../utilities/to-querystring';

import { Input, Label, Row, Status, FORM_STATUSES } from '../Form';

import { primaryLarge as classNameButtonPrimaryLarge } from '../../../styles/button';

export default class MailingListForm extends PureComponent {
    state = {
        isDisabled: false,
        status: null,
    };

    setFormStatus(status, message, isDisabled = this.state.isDisabled) {
        const newState = {};

        if (isDisabled !== this.state.isDisabled) {
            newState.isDisabled = isDisabled;
        }

        if (this.state.status !== status) {
            newState.status = status;
        }

        if (this.state.message !== message) {
            newState.message = message;
        }

        // disable form if newState.status is success
        if (
            newState.status &&
            newState.status === FORM_STATUSES.success &&
            newState.isDisabled === false
        ) {
            newState.isDisabled = true;
        }

        if (Object.keys(newState).length > 0) {
            this.setState(newState);
        }
    }

    /* eslint-disable class-methods-use-this */
    processResponse({ msg, result }) {
        let isSuccess = result === 'success';
        let message = msg;

        if (message.includes('is already subscribed')) {
            isSuccess = true;
            message = 'You\'ve already signed up to the mailing list!';
        }

        message = sanitize(message);

        this.setFormStatus(
            isSuccess ? FORM_STATUSES.success : FORM_STATUSES.error,
            message,
            isSuccess,
        );
    }
    /* eslint-enable class-methods-use-this */

    handleSubmit = async (ev) => {
        ev.preventDefault();

        this.setFormStatus(FORM_STATUSES.info, 'Sending request', true);

        // get querystring based on form data
        const querystring = toQueryString(new FormData(ev.target).entries());
        const action = `${ev.target.action.replace('/post', '/post-json?')}&${querystring}`;

        await fetchp(action, {
            method: 'POST',
            jsonpCallback: 'c',
        }).then(response => response.json()).then((json) => {
            this.processResponse(json);
        }).catch((err) => {
            const error = typeof err === 'object' && Object.hasOwnProperty.call(err, 'message') ?
                err.message :
                err;

            this.setFormStatus(FORM_STATUSES.error, error, false);
        });
    };

    render() {
        const { status, message } = this.state;

        return [
            <Status key="status" status={status}>{message}</Status>,

            <form
                key="form"
                action="https://jsne.us18.list-manage.com/subscribe/post"
                method="post"
                onSubmit={this.handleSubmit}
                ref={this.form}
                id="mailing-list-form"
            >

                <input type="hidden" name="u" value="b7ad7d71d3e3e5e5f548fa572" />
                <input type="hidden" name="id" value="bad0148f91" />
                <input type="hidden" name="c" value="?" />

                <Row>
                    <Label htmlFor="NAME" value="Your name" />
                    <Input
                        type="name"
                        placeholder="Charlie Kelly"
                        required
                        name="NAME"
                    />
                </Row>
                <Row>
                    <Label htmlFor="EMAIL" value="Your email" />
                    <Input
                        type="email"
                        placeholder="charlie@paddyspub.com"
                        required
                        name="EMAIL"
                        ref={this.email}
                    />
                </Row>
                <Row center>
                    <button
                        className={classNameButtonPrimaryLarge}
                        type="submit"
                        disabled={this.state.isDisabled}
                    >
                        Register
                    </button>
                </Row>
            </form>,
        ];
    }
}
