import "./UserAvatar.css";  // Import the CSS file

export default function UserAvatar({ src, alt, size = 12, icon }) {
  return (
    <div className="avatar-wrapper">
      <img
        src={src}
        alt={alt}
        className={`avatar-image w-${size} h-${size}`}
      />
      {icon && <div className="avatar-icon">{icon}</div>}
    </div>
  );
}
