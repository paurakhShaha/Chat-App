import { useState } from "react";

import useConversation from "../../zustand/useCoversation.js";
import useGetConversations from "../../hooks/useGetConversation.js";
import toast from "react-hot-toast";
import { set } from "mongoose";
function SearchInput() {
  const [search, setSearch] = useState("");
	const { setSelectedConversation } = useConversation();
	const { conversation } = useGetConversations();

	const handleSubmit = (e) => {
		e.preventDefault();
		if (!search) return;
		if (search.length < 3) {
			return toast.error("Search term must be at least 3 characters long");
		}

		const user = conversation.find((user) => user.username === search);
    if (user) {
      setSelectedConversation(user);
      setSearch("")
		} else toast.error("No such user found!");
	};
	return (
		<form onSubmit={handleSubmit} className='flex items-center gap-2'>
			<input
				type='text'
				placeholder='Search…'
				className='input input-bordered rounded-full'
				value={search}
				onChange={(e) => setSearch(e.target.value)}
			/>
			<button type='submit' className='btn btn-circle bg-sky-500 text-white'>
				Search
			</button>
		</form>
	);
}

export default SearchInput