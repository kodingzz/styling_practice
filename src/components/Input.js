

export default function CustomInput({invalid,label,...input}){
    let labelClasses= "block mb-2 text-xs font-bold tracking-wide uppercase text-stone-200 ";
    let inputClasses= 'w-full px-3 py-2 leading-tight bg-stone-300 text-grey-700 border rounded shadow';

    if(invalid){
        labelClasses="block mb-2 text-xs font-bold tracking-wide uppercase text-red-400 ";
        inputClasses= 'w-full px-3 py-2 leading-tight bg-red-100 text-red-500 border-red-300 rounded shadow';

    }
    return (
        <p>
           <label className={labelClasses}>{label}</label>
           <input  className={inputClasses} {...input}/> 
        </p>
    )
}