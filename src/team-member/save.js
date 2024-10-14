import { useBlockProps, RichText } from '@wordpress/block-editor';

export default function Save({ attributes }) {
	const { name, bio, url, alt, id } = attributes;
	return (
		<div {...useBlockProps.save()}>
			{/* https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/ */}

			{url && (
				<img
					src={url}
					alt={alt}
					className={id ? `wp-image-${id}` : null}
				/>
			)}

			<RichText.Content tagName="h4" value={name} />
			<RichText.Content tagName="p" value={bio} />
		</div>
	);
}
