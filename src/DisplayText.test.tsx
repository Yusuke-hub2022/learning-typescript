import React from "react";
import { render, fireEvent, cleanup, act } from '@testing-library/react';
import DisplayText from "./DisplayText";
import '@testing-library/jest-dom/extend-expect';

afterEach(cleanup)

describe("Test DisplayText", () => {
    const userFullName = "John Tester"

    const getUserFullnameMock = (username: string): [Promise<string>, jest.Mock<Promise<string>, [string]>] => {
        const promise: Promise<string> = new Promise((res,rej) => {
            res(userFullName)
        })

        const getUserFullname = jest.fn(async (username: string): Promise<string> => {
            return promise
        })

        return [promise, getUserFullname]
    }

    it("renders without crashing", () => {
        const username = 'testuser'
        const [promise, getUserFullname] = getUserFullnameMock(username)
        const { baseElement } = render(<DisplayText getUserFullname={getUserFullname}/>)
        expect(baseElement).toBeInTheDocument()
    })

    it("matches snapshot", () => {
        const username = 'testuser'
        const [promise, getUserFullname] = getUserFullnameMock(username)
        const { baseElement } = render(<DisplayText getUserFullname={getUserFullname}/>)
        expect(baseElement).toMatchSnapshot()
    })

    it("receive input text", () => {
        const username = 'testuser'
        const [promise, getUserFullname] = getUserFullnameMock(username)
        const { getByTestId } = render(<DisplayText getUserFullname={getUserFullname} />)
        const input = getByTestId('user-input')
        fireEvent.change(input, {target: {value: username}})
        expect(input).toBeInTheDocument()
        expect(input).toHaveValue(username)
    })

    it("shows welcome message", async () => {
        const username = 'testuser'
        const msg = `Welcome to React testing, John Tester`
        const [promise, getUserFullname] = getUserFullnameMock(username)

        const { getByTestId } = render(<DisplayText getUserFullname={getUserFullname} />)
        const input = getByTestId('user-input')
        const label = getByTestId('final-msg')
        fireEvent.change(input, {target: {value: username}})
        const button = getByTestId('input-submit')
        fireEvent.click(button)

        expect(label).toBeInTheDocument()
        await act(() => promise)
        expect(label.innerHTML).toBe(msg)
    })
})