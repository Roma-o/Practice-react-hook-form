import React from 'react'
import { useForm } from 'react-hook-form'

function App() {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset
  } = useForm({
    mode: 'onChange'
  })

  const onSubmit = data => {
    alert(JSON.stringify(data))
    reset()
  }

  return (
    <div className="w-fit m-16 drop-shadow">
      <h1 className="text-black text-2xl font-medium">React Hook Form</h1>
      <hr className="mb-4" />
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>
          First Name:
          <input
            type="text"
            pattern="[A-Za-zА-Яа-яЁё]{1,999}"
            title="|A-z| or |A-я| words"
            style={{ textTransform: 'capitalize' }}
            className="mb-4 ml-2 border-2 rounded-lg"
            {...register('firstName', {
              required: 'Enter value',
              minLength: {
                value: 3,
                message: 'too short first name'
              },
              maxLength: {
                value: 14,
                message: 'too long last name'
              }
            })}
          />
        </label>
        <div style={{ height: 40 }}>
          {errors?.firstName && (
            <p className="text-red-900 text-lg animate-bounce h">
              {errors?.firstName?.message || 'Enter first name!'}
            </p>
          )}
        </div>

        <label>
          Last Name:
          <input
            type="text"
            pattern="[A-Za-zА-Яа-яЁё]{1,999}"
            title="|A-z| or |A-я| words"
            style={{ textTransform: 'capitalize' }}
            className="mb-6 ml-2 border-2 rounded-lg"
            {...register('lastName', {
              required: 'Enter value',
              minLength: {
                value: 3,
                message: 'too short last name'
              },
              maxLength: {
                value: 14,
                message: 'too long last name'
              }
            })}
          />
        </label>
        <div style={{ height: 40 }}>
          {errors?.lastName && (
            <p className="text-red-900 text-lg animate-bounce h">
              {errors?.lastName?.message || 'Enter last name!'}
            </p>
          )}
        </div>
        <input
          type="submit"
          value={'Send'}
          className="bg-green-700 p-3 mt-4 rounded-full text-white cursor-pointer w-full hover:scale-[1.1] transition-transform ease-out"
        />
      </form>
    </div>
  )
}

export default App
