import BookContainer from "./BookContainer";
import Filter from "./Filter";
import FormContainer from "./FormContainer";
function MainContent({ searchTerm }) {
  return (
    <main className="py-12 2xl:px-6">
      <div className="container grid xl:grid-cols-[auto_350px] 2xl:grid-cols-[auto_400px] gap-4 2xl:gap-8">
        <div className="order-2 xl:-order-1">
          <Filter />
          <BookContainer searchTerm={searchTerm} />
        </div>
        <FormContainer />
      </div>
    </main>
  );
}
export default MainContent;
