

export const JsonApi = ({ url, endpoint, params, method, jsonData, formData = {} }) => {
    if (!url) {
        url = `/api/v1/${endpoint}`;
    }

    let queryString = params ? `?${generateQueryString(params)}` : '';
    url += queryString;

    let body = '';
    let contentType = 'application/json';
    
    if (formData) {
        contentType = 'multipart/form-data';
        if (formData.constructor === FormData) {
            body = formData;
        } else {
            let formObj = new FormData();
            Object.keys(formData).map(key =>
                formObj.append(key, formData[key])
            );
            body = formObj;
        }
    } else if (jsonData) {
        body = JSON.stringify(jsonData);
    }

    requestObj = {
        method: method ? method : 'GET',
        headers: {
            'Content-Type': contentType,
            'X-CSRFToken': csrftoken,
        },
        body: body,
        credentials: 'same-origin',
        accept: 'application/json',
        cache: 'default',
    };

    return new Request(url, requestObj);
}

export const makeRequest = requestObj => {
    return new Promise((resolve, request) => {
        fetch(requestObj)
            .then(checkResponse)
            .then(resolve)
            .catch(reject);
    });  
}

const checkResponse = response => {
    let contentType = response.headers.get('Content-Type');
    if (response.status < 400) {
        return processResponse(response, contentType);
    } else {
        return processResponse(response, contentType)
            .then(processed => {
                console.log('API ERROR: ');
                return Promise.reject({                    
                    status: response.status,
                    content: processed,
                })
            })
    }
}

const processResponse = (response, contentType) => {
    switch (contentType) {
        case 'application/json':
            return response.json();
        default:
            return Promise.reject({
                status: response.status,
                content: 'Returned Content Type not supported yet.',
            })
    }
}

const generateQueryString = queryObj => {
    let queryString = '';
    let keys = Object.keys(queryObj);
    keys.map((key, index) => {
        queryString += `${key}=${queryObj[key]}${keys.length > index + 1 ? '&' : ''}`;
    });
    return queryString;
}