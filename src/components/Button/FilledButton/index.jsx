import style from "./index.module.css";

export function FilledButton({ text, color, padding, borderRadius }) {
  return (
    <button
      className={style.filledButton}
      style={{
        color: color,
        padding: padding,
        fontWeight: "bold",
        borderRadius: borderRadius,
      }}
    >
      {text}
    </button>
  );
}
