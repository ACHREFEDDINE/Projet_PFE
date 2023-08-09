
import React from "react";
const Ad = (props) => {
    const { id, status, value, createdAt, startAt, endAt, persNb, price, TtlPrice, sub, farmId, adminId, govId, delegationId, localityId, companyTypeId } = props.obj;


    return (
        <tr>
            <td>{id}</td>
            <td>{status}</td>
            <td>{value}</td>
            <td>{createdAt}</td>
            <td>{startAt}</td>
            <td>{endAt}</td>
            <td>{persNb}</td>
            <td>{price}</td>
            <td>{TtlPrice}</td>
            <td>{sub}</td>
            <td>{farmId}</td>
            <td>{adminId}</td>
            <td>{govId}</td>
            <td>{delegationId}</td>
            <td>{localityId}</td>
            <td>{companyTypeId}</td>
            <td>{companyTypeId}</td>
        </tr>

    );
};

export default Ad;    