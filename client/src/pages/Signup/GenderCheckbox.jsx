const GenderCheckbox = ({handelCheckboxChange , selectedGender}) => {
	return (
		<div className='flex'>
			<div className='form-control'>
				<label className={`label gap-2 cursor-pointer`}>
					<span className='label-text'>Male</span>
					<input type='checkbox' className={` checkbox border-slate-900 ${selectedGender === 'male' ? 'selected' : ""} `}
						checked={selectedGender==="male"}
						onChange={()=>handelCheckboxChange("male")}
					/>
				</label>
			</div>
			<div className='form-control'>
				<label className={`label gap-2 cursor-pointer`}>
					<span className='label-text'>Female</span>
					<input type='checkbox' className={` checkbox border-slate-900 ${selectedGender === 'female' ? 'selected' : ""} `}
					checked={selectedGender==="female"}
					onChange={()=>handelCheckboxChange("female")}
					/>
				</label>
			</div>
		</div>
	);
};
export default GenderCheckbox;