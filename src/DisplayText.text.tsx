import React from "react";
import { render, fireEvent } from '@testing-library/react';
import DisplayText from "./DisplayText";
import '@testing-library/jest-dom/extend-expect';

describe("Test DisplayText", () => {
    it("renders without crashing", () => {
        const { baseElement } = render(<DisplayText />)
        expect(baseElement).toBeInTheDocument()
    })

    it("receive input text", () => {
        const testuser = 'testuser'
        const { getByTestId } = render(<DisplayText />)
        const input = getByTestId('user-input')
        fireEvent.change(input, {target: {value: testuser}})
        expect(input).toBeInTheDocument()
        expect(input).toHaveValue(testuser)
    })
})