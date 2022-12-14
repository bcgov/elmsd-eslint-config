import React from "react"
import Image from "./Image"

export interface ComponentProps {
    className?: string
    children?: React.ReactNode
}

const Component: React.FunctionComponent<ComponentProps> = (props) => {
    const { className, children } = props

    return (
        <div className={className}>
            <Image data-test-boolean alt="hello-world" key={1} src="/hello-world.png" />
            {children}
        </div>
    )
}

Component.defaultProps = {
    className: undefined,
    children: null
}

export default Component
