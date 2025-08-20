const BookLoan = (id) => {
  //   console.log("Here", id);
  const fetchLoan = async (id) => {
    try {
      let token = sessionStorage.getItem("Token");
      const res = await fetch(
        `https://lms-7czt.onrender.com/books/loan/${id}/`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `token ${token}`,
          },
          method: "POST",
        }
      );

      const data = await res.json();
      // console.log(data);
      //   console.log(data.Message);
      if (data.Message !== "Loan Created Successfully") {
        // window.dispatchEvent(new Event("bookUpdate"));
        alert(data.Message);
      }
      return data;
      //   let resources = data;
      // console.log(resources);
      // sessionStorage.setItem("Books", JSON.stringify(resources));
      // window.dispatchEvent(new Event("bookStorage"));
      // setFetchedBooks(resources);
    } catch (e) {
      console.log(e);
    }
  };

  return fetchLoan(id);

  //   return <div>BookLoan</div>;
};

export default BookLoan;
