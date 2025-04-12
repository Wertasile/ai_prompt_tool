import PromptCard from "./PromptCard";

const PromptCardList = ({ data, handleTagClick }) => {

  console.log("DATA IS")
  console.table(data)
    return (
      <div className='mt-16 prompt_layout'>
        {data.map((post) => (
          <PromptCard
            key={post._id}
            post={post}
            handleTagClick={handleTagClick}
          />

          
        ))}

        
      </div>
    )
  }

  export default PromptCardList;