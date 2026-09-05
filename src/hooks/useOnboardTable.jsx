/* eslint-disable no-unsafe-optional-chaining */
/* eslint-disable no-unused-vars */
import { useMemo } from 'react';

function toObject(arr) {
  const rv = {};

  for (let i = 0; i < arr.length; ++i) {
    const key = arr[i]?.name.toLowerCase();
    rv[key] = arr[i];
  }

  return rv;
}

const useOnboardTable = (data) => {
  const tableGroup = useMemo(() => {
    if (data.body && data.body?.length > 0) {
      /* ------------------ GENERATE BODY GROUP ------------------ */
      const elements = [...data.body];
      const headers = [...data.headers];
      const bodyArray = [];

      //   parse elements for table body
      elements.forEach((elem) => {
        const rowArray = [];
        // // get array (clauses) as object keys with values
        const elementClausesObject = toObject(elem.clauses);
        const pureObject = {
          'contract id': elem.contractId,
          'treaty type': elem.treatyType,
          ...elem,
          ...elementClausesObject,
        };
        headers.forEach((header) => {
          const lowerHeader = header.toLowerCase();
          const currentElement = pureObject[lowerHeader];

          if (header === 'Contract ID') {
            rowArray.push({
              name: header,
              value: currentElement.value,
              param: {},
              id: elem.id,
              highlighted: elem.highlighted,
            });
            return;
          }

          if (header === 'Inception') {
            const date = new Date(+currentElement?.value);
            rowArray.push({
              name: header,
              value: date.toLocaleDateString(),
              param: {},
            });
            return;
          }

          if (typeof currentElement === 'object' && currentElement !== null) {
            rowArray.push(currentElement);
            return;
          }

          if (typeof currentElement === 'undefined') {
            rowArray.push({
              name: header,
              value: '',
              param: {},
            });
            return;
          }

          rowArray.push({
            name: header,
            value: currentElement,
            param: {},
          });
        });
        // // push rows to body
        bodyArray.push([{ name: 'remove', value: 'remove' }, ...rowArray]);
      });
      return { body: bodyArray };
    }
    return [];
  }, [data]);

  const headers = data.headers?.length > 0 ? ['Remove', ...data.headers] : [];

  return {
    headerGroup: [...headers],
    bodyGroup: tableGroup.body || [],
  };
};

export default useOnboardTable;
