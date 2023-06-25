// src/components/PlanDetails.js

import React, { Component } from 'react';

class PlanDetails extends Component {
  render() {
    const { plan } = this.props;
    const periodicity = {'year': "Plan Anual", 'month': 'Plan Mensual'}
    console.log(plan)
    return (
      <div className="plan-details card mb-3">
        <div className="card-body">
          <h2 className="card-title">{plan.name}</h2>
          <p className="card-text">{plan.description}</p>
          <p className="card-text">Precio: {`$${parseFloat(plan.price).toFixed(2)}`}</p>
          <p className="card-text">{periodicity[plan.periodicity]}</p>
        </div>
      </div>
    );
  }
}

export default PlanDetails;
