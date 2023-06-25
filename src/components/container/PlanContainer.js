// src/components/container/PlanContainer.js

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPlans } from '../../features/plans/plansSlice';
import PlanDetails from '../presentational/PlanDetails';
import './PlanContainer.css'

class PlanContainer extends Component {
  componentDidMount() {
    this.props.fetchPlans();
  }

  render() {
    const { plans, status, error } = this.props;

    if (status === 'loading') {
      return <p>Cargando planes...</p>;
    }

    if (status === 'failed') {
      return <p>Error al cargar los planes: {error}</p>;
    }
    
    return (
      <div className="plan-container center-container"> {/* Aplicar clase CSS personalizada */}
        {Array.isArray(plans) &&
          plans.map((plan) => (
            <PlanDetails key={plan.plan_id} plan={plan} />
          ))}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  plans: state.plans.data,
  status: state.plans.status,
  error: state.plans.error,
});

const mapDispatchToProps = {
  fetchPlans,
};

export default connect(mapStateToProps, mapDispatchToProps)(PlanContainer);
