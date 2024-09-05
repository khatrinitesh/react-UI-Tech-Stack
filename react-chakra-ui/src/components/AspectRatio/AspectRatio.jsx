import React from "react";

const AspectRatio = () => {
  return (
    <>
    <Example/>
    </>
  )
};

export default AspectRatio;

function Example() {
  return (
    <>
      <AspectRatio maxW="560px" ratio={1}>
        <iframe
          title="naruto"
          src="https://www.youtube.com/embed/QhBnZ6NPOY0"
          allowFullScreen
        />
      </AspectRatio>
    </>
  );
}
