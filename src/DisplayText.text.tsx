import React from "react";
import { render, fireEvent } from '@testing-library/react';
import DisplayText from "./DisplayText";
import '@testing-library/jest-dom/extend-expect';

describe("Test DisplayText", () => {
    it("renders without crashing", () => {
        const { baseElement } = render(<DisplayText />)
        expect(baseElement).toBeInTheDocument()
    })
})