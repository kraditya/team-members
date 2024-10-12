import { useBlockProps, RichText } from '@wordpress/block-editor';

export default function Save({ attributes }) {
	const { name, bio } = attributes;
	return (
		<div {...useBlockProps.save()}>
			{/* https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/ */}

			<RichText.content tagName="h4" value={name} />
			<RichText.content tagName="p" value={bio} />
		</div>
	);
}
