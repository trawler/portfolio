import { ImageResponse } from "@vercel/og";

// Image metadata
export const size = {
  width: 32,
  height: 32,
}
export const contentType = 'image/png'
 
// Image generation
export default function Icon() {
  return new ImageResponse(
    (
        <div
        style={{
          background: '#18181B', // zinc-900
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: '4px',
          border: '1px solid #3F3F46', // zinc-700
          fontSize: '20px',
          fontWeight: 'bold',
        }}
      >
        <div
          style={{
            color: '#4ADE80', // green-400
          }}
        >
          K
        </div>
      </div>
    ),
    // ImageResponse options
    {
      ...size,
    }
  )
}