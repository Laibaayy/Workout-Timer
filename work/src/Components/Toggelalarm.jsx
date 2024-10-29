import { memo } from "react";

function Toggelalarm({ allowSound, setAllowSound }) {
    return (
        <button
            className="btn-sound"
            onClick={() => setAllowSound((allow) => !allow)}
        >
            {allowSound ? "🔈" : "🔇"}
        </button>
    );
}

export default memo(Toggelalarm);