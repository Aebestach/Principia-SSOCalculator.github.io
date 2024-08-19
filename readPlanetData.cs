
using System.Collections.Generic;
using UnityEngine;

namespace readData
{
    [KSPAddon(KSPAddon.Startup.AllGameScenes, false)]
    public class AllPlanetInfoReader : MonoBehaviour
    {
        void Start()
        {
            List<CelestialBody> bodies = FlightGlobals.Bodies;

            foreach (CelestialBody body in bodies)
            {
                string planetName = body.name;
                double radius = body.Radius;
                string gravitationalParameter = body.gravParameter.ToString("E");
                double orbitalPeriod = body.orbit?.period ?? double.NaN;

                Debug.Log($"{{\"name\": \"{planetName}\",\"Radius\": {radius}, \"GravitationalParameter\": {gravitationalParameter}, \"SiderealOrbitalPeriod\": {orbitalPeriod}, J2: 0}},");
            }
        }
    }
}