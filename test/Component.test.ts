import { render } from '@testing-library/svelte';
import Component from './Component.svelte';

describe('bun test', () => {
	it('should be able to render this component with @testing-library/svelte', () => {
		const {getByText} = render(Component);
		const div = getByText('Hello world!')
		expect(div).toBeDefined()
	});
});
