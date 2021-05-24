using System;
using Aparu.UseCases.Autos.Dtos;
using Aparu.Entities;

using MediatR;
using System.Collections.Generic;

namespace Aparu.UseCases.Autos.Queries.GetAutoListWithDrivers
{
    public class GetAutoListWithDriversQuery: IRequest<List<Auto>>
    {
    }
}