import { useState, useEffect } from "react";

const dataType = [
  {
    name: "All",
    param: "all",
    child: null,
  },
  {
    name: "Weapon",
    param: "weapon",
    child: null,
  },
  {
    name: "Outfits",
    param: "outfits",
    child: [
      {
        name: "Clothes",
        param: "clothes",
      },
      {
        name: "Faces",
        param: "_faces",
      },
      {
        name: "Hairs",
        param: "hair",
      },
      {
        name: "Wings",
        param: "wing",
      },
    ],
  },
  {
    name: "Jewelry",
    param: "jewelry",
    child: [
      {
        name: "Ring",
        param: "ring",
      },
      {
        name: "Earing",
        param: "_earing",
      },
      {
        name: "Necklace",
        param: "necklace",
      },
      {
        name: "Medal",
        param: "medal",
      },
      {
        name: "Hand",
        param: "hand",
      },
      {
        name: "Treasure",
        param: "treasure",
      },
    ],
  },
  {
    name: "Pet",
    param: "pet",
    child: [
      {
        name: "Horse",
        param: "horse",
      },
    ],
  },
  {
    name: "Consumable items",
    param: "special",
    child: [
      {
        name: "Enhancement stone",
        param: "enhancement-stone",
      },
      {
        name: "Rune",
        param: "rune",
      },
      {
        name: "Gem",
        param: "gem",
      },
      {
        name: "Card",
        param: "_card",
      },
    ],
  },
];

const dataSex = [
  {
    name: "All",
    param: "all",
  },
  {
    name: "Boy",
    param: "boy",
  },
  {
    name: "Girl",
    param: "girl",
  },
];
function setSelected(param) {
  let selected = ""
  dataType.map(item => {
    if (item.param === param)
      selected = item;
  })
  return selected;
}
function FilterBox({ handleChangeFilter, filterData, loadFilter }) {
  const [show, setShow] = useState(false);
  const [showSelection, setShowSelection] = useState(false);
  const selected = setSelected(filterData.item);
  const [childItem, setChildItem] = useState(selected.child || []);
  const [selectedText, setSelectedText] = useState(selected.name);
  return (
    <div>
      <div
        onClick={() => setShow(false)}
        className={`filter ${show ? "show" : "hide"}`}
      >
        <div
          onClick={(e) => {
            e.stopPropagation();
            setShow(true);
          }}
          className={`filter__container ${show ? "show" : ""}`}
        >
          <button
            onClick={(e) => {
              e.stopPropagation();
              setShow(false);
            }}
            className="filter__container--close-btn"
          >
            <i className="fa-solid fa-xmark"></i>
          </button>
          <div className="filter__box">
            <h3 className="text-center">Filter</h3>
            <div className="filter__box-group" onChange={e => handleChangeFilter(e)}>
              <h4 className="d-block m-0">Items</h4>
              <div className="filter__container-type">
                <h4 onClick={() => setShowSelection(!showSelection)}>
                  {selectedText}
                </h4>
                {showSelection && (
                  <div className="filter__container-type-selection">
                    <ul>
                      {dataType.map((item, index) => {
                        return (
                          <li
                            onClick={(e) => {
                              setChildItem(item.child ? item.child : []);
                              setSelectedText(item.name);
                              setShowSelection(false);
                              handleChangeFilter(e);
                            }}
                            key={index}
                            id={item.param}
                          >
                            {item.name}
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                )}
              </div>
              {childItem.length > 0 && (
                <div className="filter__box-child">
                  {childItem.map((item, index) => {
                    return (
                      <div key={index} className="d-flex justify-content-between mt-2 pr-3">
                        <span className="">{item.name}: </span>
                        <div>
                          <input
                            type="checkbox"
                            id={item.param}
                            defaultChecked={
                              (filterData[filterData.item].includes(item.param)) ? true : false 
                            }  
                            className="switch-input"
                          />
                          <label htmlFor={item.param} className="switch"></label>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
              <label htmlFor="" className="d-block mt-4">
                Sex
              </label>
              <select className="d-block" id="sex" defaultValue={filterData.sex}>
                {dataSex.map((item, index) => {
                  return (
                    <option key={index} value={item.param} 
                    >
                      {item.name}
                    </option>
                  );
                })}
              </select>
              <label htmlFor="" className="d-block mt-4">
                Type
              </label>
              <div className="filter__box-checkbox">
                <div className="d-flex justify-content-between mt-2 pr-3">
                  <span className="">Rare: </span>
                  <div>
                    <input
                      type="checkbox"
                      name="rare"
                      id="rare"
                      defaultChecked={filterData.quality.includes("rare") ? true : false}
                      className="switch-input"
                    />
                    <label htmlFor="rare" className="switch"></label>
                  </div>
                </div>
                <div className="d-flex justify-content-between mt-2 pr-3">
                  <span className="">Normal: </span>
                  <div>
                    <input
                      type="checkbox"
                      name="normal"
                      id="normal"
                      defaultChecked={filterData.quality.includes("normal") ? true : false}
                      className="switch-input"
                    />
                    <label htmlFor="normal" className="switch"></label>
                  </div>
                </div>
                <div className="d-flex justify-content-between mt-2 pr-3">
                  <span className="">Epic: </span>
                  <div>
                    <input
                      type="checkbox"
                      name="epic"
                      id="epic"
                      defaultChecked={filterData.quality.includes("epic") ? true : false}
                      className="switch-input"
                    />
                    <label htmlFor="epic" className="switch"></label>
                  </div>
                </div>
              </div>
              <div className="px-4 mt-5">
                <button type="button" className="btn btn-bordered-red" onClick={loadFilter}>
                  Filter
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={`filter__open-container ${show ? "hide" : ""}`}>
        <button onClick={() => setShow(true)} className="filter__open-button">
          <i className="fa-solid fa-filter"></i>
        </button>
      </div>
    </div>
  );
}

export default FilterBox;
