import classnames from "classnames";
import { __ } from "@wordpress/i18n";
import { useBlockProps, RichText } from "@wordpress/block-editor";

export default function save({ attributes }) {
	const {
		align,
		title,
		titleSize,
		content,
		backgroundColor,
		textColor,
		rollMessage1,
		rollMessage2,
		rollMessage3,
		rollMessage4,
		rollMessage5,
		rollMessage6,
	} = attributes;

	const blockProps = useBlockProps.save({
		className: classnames({
			[`has-text-align-${align}`]: align,
		}),
	});

	return (
		<div {...blockProps} style={{ backgroundColor: backgroundColor }}>
			<RichText.Content tagName="h2" value={title} />
			<RichText.Content
				tagName="p"
				value={content}
				style={{ textAlign: align, color: textColor }}
			/>
			{/* <p>
				<a
					href={affiliateLink}
					className="affiliate-button"
					rel={hasLinkNofollow ? "nofollow" : "noopener noreferrer"}
				>
					{linkLabel}
				</a>
			</p> */}
			<div className="dice-roll-block">
				<div className="dice">
					<ol className="die-list even-roll" data-roll="1" id="roll-button">
						<li className="die-item" data-side="1">
							<span className="dot"></span>
						</li>
						<li className="die-item" data-side="2">
							<span className="dot"></span>
							<span className="dot"></span>
						</li>
						<li className="die-item" data-side="3">
							<span className="dot"></span>
							<span className="dot"></span>
							<span className="dot"></span>
						</li>
						<li className="die-item" data-side="4">
							<span className="dot"></span>
							<span className="dot"></span>
							<span className="dot"></span>
							<span className="dot"></span>
						</li>
						<li className="die-item" data-side="5">
							<span className="dot"></span>
							<span className="dot"></span>
							<span className="dot"></span>
							<span className="dot"></span>
							<span className="dot"></span>
						</li>
						<li className="die-item" data-side="6">
							<span className="dot"></span>
							<span className="dot"></span>
							<span className="dot"></span>
							<span className="dot"></span>
							<span className="dot"></span>
							<span className="dot"></span>
						</li>
					</ol>
				</div>
				{/* <button type="button" id="roll-button">
				Roll Dice
			</button> */}
				<div
					id="rollMessage1"
					className="roll-message"
					dangerouslySetInnerHTML={{ __html: rollMessage1 }}
				></div>
				<div
					id="rollMessage2"
					className="roll-message"
					dangerouslySetInnerHTML={{ __html: rollMessage2 }}
				></div>
				<div
					id="rollMessage3"
					className="roll-message"
					dangerouslySetInnerHTML={{ __html: rollMessage3 }}
				></div>
				<div
					id="rollMessage4"
					className="roll-message"
					dangerouslySetInnerHTML={{ __html: rollMessage4 }}
				></div>
				<div
					id="rollMessage5"
					className="roll-message"
					dangerouslySetInnerHTML={{ __html: rollMessage5 }}
				></div>
				<div
					id="rollMessage6"
					className="roll-message"
					dangerouslySetInnerHTML={{ __html: rollMessage6 }}
				></div>
			</div>
		</div>
	);
}
