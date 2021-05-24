using System;
using Aparu.UseCases.Drivers.Dtos;
using Aparu.Entities;

using MediatR;
using System.Collections.Generic;

namespace Aparu.UseCases.Drivers.Queries.GetDriverList
{
    public class GetDriverListQuery: IRequest<List<Entities.Driver>>
    {
    }
}