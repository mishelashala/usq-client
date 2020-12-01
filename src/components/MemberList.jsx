export default function MemberList({ list = [], loading }) {
  if (loading) {
    return <p>loading...</p>;
  }

  if (!list.length) {
    return <p className="memberList__empty">No match</p>;
  }

  return (
    <ul className="memberList">
      {list.map((member) => (
        <li className="memberList__item" key={member.id}>
          {member.name}
        </li>
      ))}
    </ul>
  );
}
