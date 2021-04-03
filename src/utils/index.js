export const getParams = (query) => {
    if (query) {
        const mainString = query.split("?")[1];
        if (mainString.length > 0) {
            const params = mainString.split("&");
            const paramObj = {};
            params.map((param) => {
                const keyValue = param.split("=");
                paramObj[keyValue[0]] = keyValue[1];
            });
            return paramObj;
        }
    }
    return {};
};
