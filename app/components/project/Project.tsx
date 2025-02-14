import "./style.css";

export const Project = () => {
    const TOTAL_BOXES = 1599;
    const arr = Array.from({ length: TOTAL_BOXES }, (_, index) => index);
    return (
        <section className="body">
            <div id="container">
                {
                    arr.map((v) => <div key={v} className="tile"></div>
                    )
                }
            </div>
        </section>
    )
}