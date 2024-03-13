'use client'

import { useState, useEffect } from 'react'

import { FaCheck } from 'react-icons/fa'

import { Spin } from './Svg'

export default function Island ({ loading, completed, information }) {
  const [state, setState] = useState('inactive')

  useEffect(() => {
    if (loading) {
      setState('loading')
    } else if (completed) {
      setState('completed')

      setTimeout(() => {
        setState('loading')

        setTimeout(() => {
          setState('inactive')
        }, 0)
      }, 2000)
    } else {
      setState('inactive')
    }
  }, [loading, completed])

  const GetStyle = () => {
    switch (state) {
      case 'loading':
        return {
          width: '200px',
          height: '25px',
          borderRadius: '20px'
        }
      case 'completed':
        return {
          width: '250px',
          height: '60px',
          borderRadius: '50px'
        }

      default:
        break
    }
  }
  return (
    <div
      className='island'
      style={GetStyle()}
    >
      {state === 'loading' && (
        <div className='flex justify-between'>
          <div>
            <img
              src='../favicon.ico'
              alt='TikTok Logo'
              className='rounded-full my-0.5'
              width={20}
              height={90}
            />
          </div>
          <div class='flex justify-center items-center'>
            <Spin />
          </div>
        </div>
      )}

      {state === 'completed' && (
        <div className='left-0 absolute'>
          <div className='flex pl-4 items-center justify-start'>
            <div className='flex items-center'>
              <img
                src='../favicon.ico'
                alt='TikTok Logo'
                className='rounded-full my-2'
                width={43}
                height={43}
              />
              <div className='flex flex-col items-start ml-2'>
                <span className='text-[#6c6c6c] text-xs font-bold'>TikTok</span>
                <span className='text-white text-xs mt-[3px] -mb-2'>{information}</span>
              </div>
              <div className='flex justify-end items-center absolute -right-20 top-3'>
                <span className='flex justify-center items-center bg-gray-300/20 text-gray-300 rounded-full h-9 w-9'>
                  <FaCheck />
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
