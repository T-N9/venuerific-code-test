import React, { SVGProps } from 'react'

const YouTubeIcon = (props : SVGProps<SVGSVGElement>) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="23"
            height="16"
            fill="none"
            viewBox="0 0 23 16"
            {...props}
        >
            <path
                fill="#fff"
                d="M21.703 2.468A2.715 2.715 0 0019.795.546C18.112.09 11.362.09 11.362.09s-6.75 0-8.432.455a2.71 2.71 0 00-1.908 1.922 30.596 30.596 0 000 10.468 2.715 2.715 0 001.908 1.922c1.683.455 8.432.455 8.432.455s6.75 0 8.433-.455a2.71 2.71 0 001.908-1.922 30.6 30.6 0 000-10.468z"
            ></path>
            <path
                fill={props.fill || '#212122'}
                fillOpacity={props.fillOpacity || '0.2'}
                d="M9.157 10.917V4.492l5.64 3.213-5.64 3.212z"
            ></path>
        </svg>
    )
}

export default YouTubeIcon