import classnames from "classnames";

/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
 */
import { __ } from "@wordpress/i18n";

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-block-editor/#useBlockProps
 */
import { useBlockProps, InspectorControls } from "@wordpress/block-editor";

import { TextareaControl, PanelBody, PanelRow } from "@wordpress/components";

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import "./editor.scss";

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#edit
 *
 * @return {WPElement} Element to render.
 */
export default function Edit({ attributes, setAttributes }) {
	const {
		align,
		// title,
		// titleSize,
		// content,
		backgroundColor,
		// textColor,
		rollMessage1,
		rollMessage2,
		rollMessage3,
		rollMessage4,
		rollMessage5,
		rollMessage6,
	} = attributes;

	const blockProps = useBlockProps({
		className: classnames({
			[`has-text-align-${align}`]: align,
		}),
	});

	// const onChangeTitle = (newTitle) => {
	// 	setAttributes({ title: newTitle });
	// };

	// const onChangeContent = (newContent) => {
	// 	setAttributes({ content: newContent });
	// };

	// const onChangeAlign = (newAlign) => {
	// 	setAttributes({
	// 		align: newAlign === undefined ? "none" : newAlign,
	// 	});
	// };

	// const onChangeBackgroundColor = (newBackgroundColor) => {
	// 	setAttributes({ backgroundColor: newBackgroundColor });
	// };
	// const onChangeTextColor = (newTextColor) => {
	// 	setAttributes({ textColor: newTextColor });
	// };

	const onChangeMessage = (num, message) => {
		setAttributes({ [`rollMessage${num}`]: message });
	};

	function rollDice() {
		const dice = [...document.querySelectorAll(".die-list")];
		const message = document.querySelector("#roll-message");
		message.innerHTML = `Rolling...`;

		dice.forEach((die) => {
			toggleClasses(die);
			die.dataset.roll = getRandomNumber(1, 6);

			setTimeout(() => {
				switch (parseInt(die.dataset.roll)) {
					case 1:
						message.innerHTML = `<span>${rollMessage1}</span>`;
						break;
					case 2:
						message.innerHTML = `<span>${rollMessage2}</span>`;
						break;
					case 3:
						message.innerHTML = `<span>${rollMessage3}</span>`;
						break;
					case 4:
						message.innerHTML = `<span>${rollMessage4}</span>`;
						break;
					case 5:
						message.innerHTML = `<span>${rollMessage5}</span>`;
						break;
					case 6:
						message.innerHTML = `<span>${rollMessage6}</span>`;
						break;

					default:
						break;
				}
			}, 1500);
		});
	}

	function toggleClasses(die) {
		die.classList.toggle("odd-roll");
		die.classList.toggle("even-roll");
	}

	function getRandomNumber(min, max) {
		min = Math.ceil(min);
		max = Math.floor(max);
		return Math.floor(Math.random() * (max - min + 1)) + min;
	}

	return (
		<>
			<InspectorControls>
				{/* <PanelColorSettings
					title={__("Color settings", "dice-roll")}
					initialOpen={false}
					colorSettings={[
						{
							value: textColor,
							onChange: onChangeTextColor,
							label: __("Text color", "dice-roll"),
						},
						{
							value: backgroundColor,
							onChange: onChangeBackgroundColor,
							label: __("Background color", "dice-roll"),
						},
					]}
				/> */}
				<PanelBody
					title={__("Custom Messages", "dice-roll")}
					initialOpen={true}
				>
					<PanelRow>
						<fieldset>
							<TextareaControl
								label={__("Roll 1 - Message", "dice-roll")}
								value={rollMessage1}
								onChange={(value) => onChangeMessage(1, value)}
								help={__(
									"Add the message to be displayed when a 1 is rolled",
									"dice-roll"
								)}
							/>
						</fieldset>
					</PanelRow>
					<PanelRow>
						<fieldset>
							<TextareaControl
								label={__("Roll 2 - Message", "dice-roll")}
								value={rollMessage2}
								onChange={(value) => onChangeMessage(2, value)}
								help={__(
									"Add the message to be displayed when a 2 is rolled",
									"dice-roll"
								)}
							/>
						</fieldset>
					</PanelRow>
					<PanelRow>
						<fieldset>
							<TextareaControl
								label={__("Roll 3 - Message", "dice-roll")}
								value={rollMessage3}
								onChange={(value) => onChangeMessage(3, value)}
								help={__(
									"Add the message to be displayed when a 3 is rolled",
									"dice-roll"
								)}
							/>
						</fieldset>
					</PanelRow>
					<PanelRow>
						<fieldset>
							<TextareaControl
								label={__("Roll 4 - Message", "dice-roll")}
								value={rollMessage4}
								onChange={(value) => onChangeMessage(4, value)}
								help={__(
									"Add the message to be displayed when a 4 is rolled",
									"dice-roll"
								)}
							/>
						</fieldset>
					</PanelRow>
					<PanelRow>
						<fieldset>
							<TextareaControl
								label={__("Roll 5 - Message", "dice-roll")}
								value={rollMessage5}
								onChange={(value) => onChangeMessage(5, value)}
								help={__(
									"Add the message to be displayed when a 5 is rolled",
									"dice-roll"
								)}
							/>
						</fieldset>
					</PanelRow>
					<PanelRow>
						<fieldset>
							<TextareaControl
								label={__("Roll 6 - Message", "dice-roll")}
								value={rollMessage6}
								onChange={(value) => onChangeMessage(6, value)}
								help={__(
									"Add the message to be displayed when a 6 is rolled",
									"dice-roll"
								)}
							/>
						</fieldset>
					</PanelRow>
				</PanelBody>
			</InspectorControls>

			{/* <BlockControls>
				<AlignmentControl value={align} onChange={onChangeAlign} />
			</BlockControls> */}

			<div {...blockProps} style={{ backgroundColor: backgroundColor }}>
				{/* <RichText
					{...blockProps}
					tagName={titleSize || "h2"}
					onChange={onChangeTitle}
					allowedFormats={["core/bold", "core/italic"]}
					value={title}
					placeholder={__("Write your title...", "dice-roll")}
				/>
				<RichText
					{...blockProps}
					tagName="div"
					onChange={onChangeContent}
					allowedFormats={["core/bold", "core/italic"]}
					value={content}
					placeholder={__("Write your text...", "dice-roll")}
				/> */}
				<div className="dice-roll-block">
					<div className="dice" onClick={rollDice}>
						<ol className="die-list even-roll" data-roll="1" id="die-1">
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
					<span id="roll-message"></span>
				</div>
			</div>
		</>
	);
}
