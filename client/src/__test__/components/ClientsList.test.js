import React from 'react';
import { create } from 'react-test-renderer';
import ClientsList from '../../components/Backend/ClientsList';

describe("<ClientsList />  Snapshot", () => {
    test('Backend on FireBase', () => {
        const db = create(<ClientsList />);
        expect(db.toJSON()).toMatchSnapshot();
    });
});

