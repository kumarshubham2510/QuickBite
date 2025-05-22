export default function Button({
  children,
  textOnly,
  className,
  cssClass,
  ...props
}) {
  let cssClasses = textOnly ? "text-button" : "button";
  cssClasses += " " + cssClass;

  return (
    <button className={cssClasses} {...props}>
      {children}
    </button>
  );
}
