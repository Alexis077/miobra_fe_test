# MiObra's Frontend Test
This tehcnical test requires design and implemenation of an application to use a given endpoint to show plans related to pricing.

We provide a boilerplate project with ReactJS

## After you finish your test please share this repository with: @cbriceno-midsoft @malsu @AAnaya-MidSoft

Should you have any technical questions, please contact cbriceno@midsoftware.com.mx Title of the project: Frontend-Test-(Last Name)

## Description

Build pricing page to show all plans. It is not required a given design, just show the information is enough.
There is a current version available in https://www.dev.miobra.mx/pricing (You can take at look to this version like reference)

### Endpoint for getting information related to plans:
`URL`: https://www.api.dev.miobra.mx/plans/public/ \
`Method`: GET \
`Headers`: Content-Type: application/json

Example response:
```json
{
    "data": [
        {
            "plan_id": 1,
            "plan_payment_service": {
                "id": "price_1KxuZpBZ36wIuYCdoZCf6XTN",
                "object": "price",
                "active": true,
                "billing_scheme": "per_unit",
                "created": 1652194937,
                "currency": "mxn",
                "livemode": false,
                "lookup_key": null,
                "metadata": {
                    "related_plan": " {\"title\": \"\", \"plan\": \"\"}",
                    "classification": "free",
                    "title_features": "PLAN INDIVIDUAL INCLUYE:",
                    "features": "[{\"name\": \"Lorem ipsum dolor sit\", \"description\": \"\"}, {\"name\": \"Lorem ipsum dolor sit\", \"description\": \"\"}, {\"name\": \"Lorem ipsum dolor sit\", \"description\": \"\"}, {\"name\": \"Lorem ipsum dolor sit\", \"description\": \"\"}, {\"name\": \"Lorem ipsum dolor sit\", \"description\": \"\"}]"
                },
                "nickname": "INDIVIDUAL",
                "product": "prod_LfExwAHLXQ7ipG",
                "recurring": {
                    "aggregate_usage": null,
                    "interval": "year",
                    "interval_count": 1,
                    "trial_period_days": null,
                    "usage_type": "licensed"
                },
                "tax_behavior": "unspecified",
                "tiers_mode": null,
                "transform_quantity": null,
                "type": "recurring",
                "unit_amount": 0,
                "unit_amount_decimal": "0"
            },
            "name": "INDIVIDUAL",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
            "billing_scheme": "per_unit",
            "price": "0.0000",
            "periodicity": "year",
            "periodicity_count": 1,
            "tiers": null,
            "created_dt_tm": "2022-05-10T15:02:16.990525Z",
            "updated_dt_tm": "2022-05-10T15:02:16.991361Z",
            "product": 1
        },
    ]
}
```

## Aspects to be evaluated

- Use Class Components
- Use Presentational and Container Components
- Use Redux
- Functionality
- Documentation
- Software design
- Programming style
- Appropriate frameworks use

## Aspects to be ignored

- Visual design of the solution
- Deployment of the solution

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
