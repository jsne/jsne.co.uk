/**
 * @module MailingListFormSection
 * @desc MailingListForm wrapped in a Section component
 */

import React from 'react';

import Section from '../Section';

import MailingListForm from './MailingListForm';

const MailingListFormSection = () => (
    <Section title="Join Our Mailing List">
        <MailingListForm />
    </Section>
);

export default MailingListFormSection;
