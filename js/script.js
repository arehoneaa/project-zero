document.getElementById("searchForm").addEventListener("submit", function (e) {
    e.preventDefault();
    const query = e.target.search.value.trim();
  
    if (query) {
      const email = "amulovhedzi@ngb.org.za";
      const subject = encodeURIComponent("NGB Search Submission");
      const body = encodeURIComponent(`The following search term was submitted: ${query}`);
      const mailtoLink = `mailto:${email}?subject=${subject}&body=${body}`;
      
      window.location.href = mailtoLink;
    }
  });
  