import React from "react"

export const ShadowRoot = () => {
  const ref = React.useRef()

  React.useEffect(() => {
    ref.current.attachShadow({ mode: "closed" })
    ref.current.shadowRoot.innerHTML = `
      <style>
        button {
          font-family: "Nunito Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
          font-weight: 700;
          border: 0;
          border-radius: 3em;
          cursor: pointer;
          display: inline-block;
          line-height: 1;
          color: white;
          background-color: tomato;
          font-size: 14px;
          padding: 11px 20px;
        }
        button:hover {
          text-decoration: underline;
        }
        button:focus {
          box-shadow: inset 0 0 0 2px maroon;
          outline: 0;
        }
        button:active {
          background-color: firebrick;
        }
      </style>
      <button>This is shadow DOM content</button>
    `
  }, [])

  return <div ref={ref} />
}