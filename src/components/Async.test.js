import {render, screen} from '@testing-library/react'
import Async from './Async'

describe('Async component', () => {
    test('renders text if request succeeds', async () => {
        window.fetch = jest.fn()
        window.fetch.mockResolvedValueOnce({
            json: async () => ({data: [{id: 263, text: 'Learn Redux'}]})
        })
        render(<Async/>)

        const listItemElements = await screen.findAllByRole('listitem')
        expect(listItemElements).not.toHaveLength(0)
    })
})