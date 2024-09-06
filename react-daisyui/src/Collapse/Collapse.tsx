import React from 'react';

const Collapse = () => {
  return (
    <>
    {/* Custom colors for collapse that works with checkbox */}
    <div className="bg-base-200 collapse">
  <input type="checkbox" className="peer" />
  <div
    className="collapse-title bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
    Click me to show/hide content
  </div>
  <div
    className="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
    <p>hello</p>
  </div>
</div>

    {/* Custom colors for collapse that works with focus */}
    <div
  tabIndex={0}
  className="bg-primary text-primary-content focus:bg-secondary focus:text-secondary-content collapse">
  <div className="collapse-title">Focus me to see content</div>
  <div className="collapse-content">
    <p>tabindex={0} attribute is necessary to make the div focusable</p>
  </div>
</div>

    {/* Force close */}
    <div tabIndex={0} className="collapse collapse-close border-base-300 bg-base-200 border">
  <div className="collapse-title text-xl font-medium">I have collapse-close class</div>
  <div className="collapse-content">
    <p>tabindex={0} attribute is necessary to make the div focusable</p>
  </div>
</div>

    {/* Force open */}
    <div tabIndex={0} className="collapse collapse-open border-base-300 bg-base-200 border">
  <div className="collapse-title text-xl font-medium">I have collapse-open class</div>
  <div className="collapse-content">
    <p>tabindex={0} attribute is necessary to make the div focusable</p>
  </div>
</div>

    {/* With arrow plus/minus icon */}
    <div tabIndex={0} className="collapse collapse-plus border-base-300 bg-base-200 border">
  <div className="collapse-title text-xl font-medium">Focus me to see content</div>
  <div className="collapse-content">
    <p>tabindex={0} attribute is necessary to make the div focusable</p>
  </div>
</div>

    {/* With arrow icon */}
    <div tabIndex={0} className="collapse collapse-arrow border-base-300 bg-base-200 border">
  <div className="collapse-title text-xl font-medium">Focus me to see content</div>
  <div className="collapse-content">
    <p>tabindex={0} attribute is necessary to make the div focusable</p>
  </div>
</div>

    {/* With border and background color */}
    <div tabIndex={0} className="collapse border-base-300 bg-base-200 border">
  <div className="collapse-title text-xl font-medium">Focus me to see content</div>
  <div className="collapse-content">
    <p>tabindex={0} attribute is necessary to make the div focusable</p>
  </div>
</div>
    
    {/* Collapse using <details> and <summary> tag */}
    <details className="collapse bg-base-200">
  <summary className="collapse-title text-xl font-medium">Click to open/close</summary>
  <div className="collapse-content">
    <p>content</p>
  </div>
</details>

    {/* Collapse with checkbox */}
    <div className="collapse bg-base-200">
  <input type="checkbox" />
  <div className="collapse-title text-xl font-medium">Click me to show/hide content</div>
  <div className="collapse-content">
    <p>hello</p>
  </div>
</div>
      {/* Collapse with focus */}
      <div tabIndex={0} className="collapse bg-base-200">
  <div className="collapse-title text-xl font-medium">Focus me to see content</div>
  <div className="collapse-content">
    <p>tabindex={0} attribute is necessary to make the div focusable</p>
  </div>
</div>
    </>
  );
}

export default Collapse;
