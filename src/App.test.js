import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

//mocks need to be outside the scope
jest.mock('./sidebar/MenuSidebar', () => () => <div>sidebarMock</div>)
jest.mock('./sidebar/WidgetSidebar', () => () => <div>widge sidebar mock</div>)
jest.mock('./postpanel/PostPanel', () => () => <div>post panel mock</div>)
jest.mock('./about/About', () => () => <div>About mock</div>)

describe("test suite for social media", () => {
    test('renders learn react link', () => {
        render (<App />)
        expect(screen.getAllByText('Home')[0]).toBeInTheDocument();
    });
    test('renders learn react link 1', () => {
        render (<App />)
        expect(screen.getAllByText('Home')[0]).toBeInTheDocument();
    });
});
