---
title: Banyura web design
import ".desktop {
  background-color: #ffffff;
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
}

.desktop .div {
  background-color: #ffffff;
  height: 1656px;
  position: relative;
  width: 1440px;
}

.desktop .overlap {
  background-color: #f28f0e;
  height: 629px;
  left: 0;
  position: absolute;
  top: 0;
  width: 1440px;
}

.desktop .text-wrapper {
  color: #000000;
  font-family: "Inter-Regular", Helvetica;
  font-size: 48px;
  font-weight: 400;
  left: 487px;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  top: 268px;
}

.desktop .text-wrapper-2 {
  color: #000000;
  font-family: "Inter-Regular", Helvetica;
  font-size: 48px;
  font-weight: 400;
  left: 177px;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  top: 789px;
}

.desktop .ellipse {
  background-color: #d9d9d9;
  border-radius: 137.5px;
  height: 275px;
  left: 678px;
  position: absolute;
  top: 730px;
  width: 275px;
}

.desktop .ellipse-2 {
  background-color: #d9d9d9;
  border-radius: 137.5px;
  height: 275px;
  left: 1034px;
  position: absolute;
  top: 730px;
  width: 275px;
}

.desktop .overlap-group {
  background-color: #d9d9d9;
  height: 417px;
  left: 0;
  position: absolute;
  top: 1239px;
  width: 1440px;
}

.desktop .text-wrapper-3 {
  color: #000000;
  font-family: "Inter-Regular", Helvetica;
  font-size: 48px;
  font-weight: 400;
  left: 243px;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  top: 156px;
}
";

export const Desktop = () => {
  return (
    <div className="desktop">
      <div className="div">
        <div className="overlap">
          <div className="text-wrapper">Welcome to Banyura</div>
        </div>

        <div className="text-wrapper-2">Why choose us</div>

        <div className="ellipse" />

        <div className="ellipse-2" />

        <div className="overlap-group">
          <div className="text-wrapper-3">
            Contact me mana.khorsand.art@gmail.com
          </div>
        </div>
      </div>
    </div>
  );
};

---

