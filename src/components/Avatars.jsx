const Avatar = ({name,borderColor,img}) => {
  return (
    <>
      <div className="card mb-3 m-2 shadow-sm" style={{ width: "7rem",height:"11rem" }}>
        <div
          className="d-flex flex-column card-body align-items-center justify-content-around"
          style={{ backgroundColor: "none" }}
        >
          <div className="p-6">
            <img
              src={img}
              className="rounded-circle"
              style={{
                width: "74px",
                height:"74px",
                border: `2px solid ${borderColor}`,
                padding: "2px",
              }}
              alt="Avatar"
            />
          </div>

        </div>
          <p className="mt-1 text-center text-dark fs-6 fw-bold text-wrap" >{name}</p>
      </div>
    </>
  );
};

export default Avatar;
