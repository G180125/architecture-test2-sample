import Button from "../button/Button";

const CustomForm = ({ title, InputComponent, inputs, positiveButton, negativeButton, normalButton, error }) => {
    return (
        <div className="grid grid-cols-1 gap-5 w-1/2">
            <h5>{title}</h5>

            {inputs.map((input, index) => (
                <InputComponent key={index} {...input} />
            ))}

            {positiveButton && (
                <Button buttonType="positive" title={positiveButton.title} handler={positiveButton.handler} />
            )}

            {negativeButton && (
                <Button buttonType="danger" title={negativeButton.title} handler={negativeButton.handler} />
            )}

            {normalButton && (
                <Button buttonType="normal" title={normalButton.title} handler={normalButton.handler} />
            )}

            {error && <h5 className="text-red">{error}</h5>}
        </div>
    );
};

export default CustomForm;
