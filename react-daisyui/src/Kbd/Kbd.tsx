import React from 'react';

const Kbd = () => {
  return (
    <>
      <kbd className="kbd">A</kbd>

      {/* sizes */}
      <kbd className="kbd kbd-lg">Shift</kbd>
<kbd className="kbd kbd-md">Shift</kbd>
<kbd className="kbd kbd-sm">Shift</kbd>
<kbd className="kbd kbd-xs">Shift</kbd>

{/* in text */}
<kbd className="kbd kbd-sm">F</kbd>
to pay respects.

{/* key combination */}
<kbd className="kbd">ctrl</kbd>
+
<kbd className="kbd">shift</kbd>
+
<kbd className="kbd">del</kbd>

{/* function keys */}
<kbd className="kbd">⌘</kbd>
<kbd className="kbd">⌥</kbd>
<kbd className="kbd">⇧</kbd>
<kbd className="kbd">⌃</kbd>
    </>
  );
}

export default Kbd;
