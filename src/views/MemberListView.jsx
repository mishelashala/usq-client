import { useState, useEffect } from "react";
import MemberList from "../components/MemberList";
import { MemberService } from "../services/MemberService";

const memberService = MemberService();

export default function MemberListView() {
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [memberList, setMemberList] = useState([]);

  useEffect(() => {
    (async () => {
      const members = await memberService.getAll();
      setMemberList(members);
      setLoading(false);
    })();
  }, []);

  const handleChangeSearch = (event) => {
    const {
      target: { value },
    } = event;
    setSearch(value);
  };

  return (
    <div>
      <header className="header">
        <h1 className="title">Members Filters</h1>
      </header>
      <article className="container">
        <input
          className="search__box"
          placeholder="Search..."
          value={search}
          onChange={handleChangeSearch}
        />
        <MemberList
          list={memberList.filter(
            (member) =>
              member.name.toLowerCase().indexOf(search.toLowerCase()) !== -1
          )}
          loading={loading}
        />
      </article>
    </div>
  );
}

// audelio.lujan@unosquare.com
