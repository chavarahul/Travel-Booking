import React from 'react'

const Select = ({ data, register, className }: any) => {
    const def = "text-slate-400 rounded-md w-2/3 outline-none p-2"
    return (
        <select
            className={className ? className : def}
            {...register}
        >{

                data.length > 0 && (
                    data?.map((ele: any) => (
                        <option key={ele.value} value={ele.value}>
                            {
                                ele.text ? ele.text : ele.city
                            }
                        </option>
                    ))
                )
            }

        </select>
    )
}

export default Select
