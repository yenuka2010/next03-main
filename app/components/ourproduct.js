import React from "react";

const products = (
  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
    <div className="grid gap-4">
      <div>
        <img
          className="h-auto max-w-full rounded-lg"
          src="/1.jpg" // Local image path
          alt="Image 1"
        />
      </div>
      <div>
        <img
          className="h-auto max-w-full rounded-lg"
          src="/2.jpg" // Local image path
          alt="Image 2"
        />
      </div>
      <div>
        <img
          className="h-auto max-w-full rounded-lg"
          src="/3.jpg" // Local image path
          alt="Image 3"
        />
      </div>
    </div>
    <div className="grid gap-4">
      <div>
        <img
          className="h-auto max-w-full rounded-lg"
          src="/4.jpg" // Local image path
          alt="Image 4"
        />
      </div>
      <div>
        <img
          className="h-auto max-w-full rounded-lg"
          src="/5.jpg" // Local image path
          alt="Image 5"
        />
      </div>
      <div>
        <img
          className="h-auto max-w-full rounded-lg"
          src="/6.jpg" // Local image path
          alt="Image 6"
        />
      </div>
    </div>
    <div className="grid gap-4">
      <div>
        <img
          className="h-auto max-w-full rounded-lg"
          src="/7.jpg" // Local image path
          alt="Image 7"
        />
      </div>
      <div>
        <img
          className="h-auto max-w-full rounded-lg"
          src="/8.jpg" // Local image path
          alt="Image 8"
        />
      </div>
      <div>
        <img
          className="h-auto max-w-full rounded-lg"
          src="/9.jpg" // Local image path
          alt="Image 9"
        />
      </div>
    </div>
    <div className="grid gap-4">
      <div>
        <img
          className="h-auto max-w-full rounded-lg"
          src="/10.jpg" // Local image path
          alt="Image 10"
        />
      </div>
      <div>
        <img
          className="h-auto max-w-full rounded-lg"
          src="/11.jpg" // Local image path
          alt="Image 11"
        />
      </div>
      <div>
        <img
          className="h-auto max-w-full rounded-lg"
          src="/12.jpg" // Local image path
          alt="Image 12"
        />
      </div>
    </div>
  </div>
);

const App = () => {
  return <div>{products}</div>;
};

export default App;
