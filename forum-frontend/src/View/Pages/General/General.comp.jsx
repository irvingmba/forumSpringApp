import FeaturedPost from "../../Components/FeaturedPost";
import post from "../../Content/General/samplePost";

export default function General() {
  return (
    <div role="feed">
      <FeaturedPost post={post} />
    </div>
  );
}
